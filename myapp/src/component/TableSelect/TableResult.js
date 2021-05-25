import {  Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import React, { useState, useEffect } from "react";

const data = [
 
];

class TableResult extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Tên môn học',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Nhóm môn học',
        dataIndex: 'group',
      },
      {
        title: 'Số tín chỉ',
        dataIndex: 'number',
      },
      {
        title: 'Thứ',
        dataIndex: 'weekday',
      },
      {
        title: 'Phòng',
        dataIndex: 'room',
      },
      {
        title: 'Kíp học',
        dataIndex: 'specialized',
      },
      {
        title: 'Tên giảng viên',
        dataIndex: 'nameTeacher',
      },
    ];
    const data = [
      // {
      //   key: '1',
      //   // name: 'Đảm bảo chất lượng phần mềm',
      // },
      // {
      //   key: '2',
      //   // name: 'Các hệ thống phân tán',
      // },
      // {
      //   key: '3',
      //   // name: 'Kỹ thuật số',
      // },
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
export default TableResult;
