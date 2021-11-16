import { useMoralis } from 'react-moralis';
import { Button, Card, Modal } from 'antd';
import React, { useState } from 'react';
import { SelectOutlined } from '@ant-design/icons';
import { getEllipsisTxt } from './helpers/formatter';
import { useMoralisDapp } from '../providers/MoralisDappProvider/MoralisDappProvider';
import { getExplorer } from './helpers/network';
import Blockie from './Blockies';

const styles = {
  account: {
    height: '42px',
    padding: '0 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '12px',
    backgroundColor: 'rgb(244, 244, 244)',
    cursor: 'pointer',
  },
  text: {
    color: '#21BF96',
  },
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  const [modalVisible, setModalVisible] = useState(false);

  if (!isAuthenticated) {
    return (
      <Button
        type="button"
        style={styles.account}
        onClick={() => authenticate({ signingMessage: 'Connect to Account' })}
      >
        <p style={styles.text}>Authenticate</p>
      </Button>
    );
  }

  return (
    <>
      <div
        style={{ border: 'red solid 1px', ...styles.account }}
      >
        <p style={{ marginRight: '5px', ...styles.text }}>
          {getEllipsisTxt(walletAddress, 6)}
        </p>
        <Blockie currentWallet scale={3} />
      </div>
      <Card
        style={{
          marginTop: '10px',
          borderRadius: '1rem',
        }}
        bodyStyle={{ padding: '15px' }}
      >
        <div style={{ marginTop: '10px', padding: '0 10px' }}>
          <a
            href={`${getExplorer(chainId)}/address/${walletAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <SelectOutlined style={{ marginRight: '5px' }} />
            View on Explorer
          </a>
        </div>
      </Card>
      <Button
        size="large"
        type="primary"
        style={{
          width: '100%',
          marginTop: '10px',
          borderRadius: '0.5rem',
          fontSize: '16px',
          fontWeight: '500',
        }}
        onClick={() => {
          logout();
        }}
      >
        Disconnect Wallet
      </Button>
      <Button onClick={() => { setModalVisible(true); }}>Show Modal</Button>
      <Modal
        title="Title"
        visible={modalVisible}
        onOk={() => { setModalVisible(true); }}
        onCancel={() => { setModalVisible(true); }}
      >
        <p>Something</p>
      </Modal>
    </>
  );
}

export default Account;
