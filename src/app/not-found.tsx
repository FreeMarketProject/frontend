import type { Metadata } from 'next';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '../../public/not-found.png';

export const metadata: Metadata = {
  title: 'FreeMarket - 페이지를 찾을 수 없습니다',
  description: 'FreeMarket - 페이지를 찾을 수 없습니다',
};

const NotFound = () => (
  <div className="sub-container" style={{ textAlign: 'center' }}>
    <Image src={NotFoundImage} alt="not found" width={250} style={{ marginTop: 20 }} />
    <h2 style={{ fontWeight: 700 }}>앗! 죄송해요.</h2>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginBottom: 30,
        color: '#00000078',
        fontSize: 14,
      }}
    >
      <div>요청하신 페이지를 찾을 수 없습니다.</div>
    </div>
    <Link href="/">
      <Button style={{ marginBottom: 20, width: 230, height: 50 }}>홈으로 이동</Button>
    </Link>
  </div>
);

export default NotFound;
