import { Divider, Empty, Spin, Table, TableColumnsType, Tabs, Tag } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as S from './style';
import { TradeDataType } from '@/types/Table/Table.interface';
import { loadMemberTradeList } from '@/api/member/api';
import CodeTag from '@/components/CodeTag';

const items = [
  {
    key: '',
    label: '중고거래',
  },
  {
    key: 'realty',
    label: '부동산',
  },
  {
    key: 'jobs',
    label: '아르바이트',
  },
];

const columns: TableColumnsType<TradeDataType> = [
  {
    title: '상태',
    dataIndex: 'tr_s_nm',
    key: 'tr_s_nm',
    align: 'center',
    render: (value, record, index) => <CodeTag code={record?.tr_s_code} />,
  },
  {
    title: '제목',
    dataIndex: 'tr_title',
    key: 'tr_title',
    align: 'center',
  },
  {
    title: '날짜',
    dataIndex: 'reg_dt',
    key: 'reg_dt',
    align: 'center',
  },
];

const Chat = () => {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['memberTradeList'],
    queryFn: loadMemberTradeList,
  });
  const [activeKey, setActiveKey] = useState('');
  const title = items?.find((e: any) => e?.key === activeKey)?.label;

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const SellList = () =>
    isLoading ? (
      <S.StyledSpin />
    ) : (
      <Table
        rowKey={(record) => record?.tr_seq}
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data?.sell_list}
        locale={{ emptyText: '목록이 존재하지 않습니다.' }}
      />
    );
  const BuyList = () =>
    isLoading ? (
      <S.StyledSpin />
    ) : (
      <Table
        rowKey={(record) => record?.tr_seq}
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data?.buy_list}
        locale={{ emptyText: '목록이 존재하지 않습니다.' }}
      />
    );

  return (
    <>
      <Tabs
        activeKey={activeKey}
        items={items}
        onChange={onChange}
        style={{ fontWeight: 800, marginTop: 15 }}
      />
      <S.SubTitle>등록한 {title} 목록</S.SubTitle>
      <S.StyledBoxDiv>
        <SellList />
      </S.StyledBoxDiv>
      <S.SubTitle>신청한 {title} 목록</S.SubTitle>
      <S.StyledBoxDiv>
        <BuyList />
      </S.StyledBoxDiv>
    </>
  );
};

export default Chat;
