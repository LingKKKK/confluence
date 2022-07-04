import React, { useState } from 'react';
import { BugFilled, PlusOutlined, MessageOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { withRouter, useHistory } from 'react-router-dom';
import { Typography, Avatar } from 'antd';
import Event from '@utils/event';
import './index.less';

const { Title } = Typography;

interface IProps {
  history: any;
}

interface IState {
  lang: string;
}

const toHome = () => {
  console.log("跳转首页");
};
const showMessage = () => {
  console.log("展示消息");
};
const showTips = () => {
  console.log('展示帮助信息');
};
const showUserOperation = () => {
  console.log('展示个人操作栏')
};

const defaultAvatar: any = '//pic3.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpg?source=32738c0c%202x';

const NavHeader: React.FC = () => {
  // const [rememberStatus, setRememberStatus] = useState(false);
  // const history = useHistory();

  return (
    <div className="navigation-header">
      <BugFilled className="user-operate-btn icon" onClick={toHome} />
      <Title level={3} className="title">
        EKKO
      </Title>
      <ul className="quick-ul">
        <li>空间</li>
        <li>人员</li>
        <li>问题</li>
        <li>日程表</li>
      </ul>
      <div className="add-dialog">
        <span className="create">创建</span>
        <span className="new">...</span>
      </div>
      <span onClick={showUserOperation}>
        <Avatar className="user-avatar" style={{ verticalAlign: 'middle' }} size="default" src={defaultAvatar}></Avatar>
      </span>
      <MessageOutlined className="user-operate-btn tips" onClick={showMessage} />
      <QuestionCircleOutlined className="user-operate-btn help" onClick={showTips} />
      <span className='search-dialog'>
        搜索
        <SearchOutlined className='search-icon'/>
      </span>
    </div>
  );
};

export default withRouter(NavHeader);

// class Index extends Component<IProps, IState> {
//   constructor(props) {
//     super(props);
//     this.state = { lang: 'zh_CN' };
//     this.signOut = this.signOut.bind(this);
//   }

//   signOut() {
//     const { history } = this.props;
//     localStorage.token = '';
//     history.replace('/user/login');
//   }

//   changeIntl = () => {
//     Event.emit('changeLanguage', this.state.lang == 'zh_CN' ? 'en_US' : 'zh_CN');
//     this.setState({ lang: this.state.lang == 'zh_CN' ? 'en_US' : 'zh_CN' });
//   };

//   render() {
//     const menu = (
//       <Menu>
//         <Menu.Item>
//           <a target="_blank" rel="noopener noreferrer" onClick={this.signOut}>
//             退出
//           </a>
//         </Menu.Item>
//       </Menu>
//     );
//     return (
//       <section className="layoutHeader">
//         <div className="headeLeft">{intl.get('EKKO')}</div>
//         <div className="headerRight">
//           <Tag className="intl" onClick={this.changeIntl}>
//             {this.state.lang == 'zh_CN' ? '中文' : 'English'}
//           </Tag>
//           <span className="message">{intl.get('MESSAGE')}</span>
//           <Dropdown className="dropDown" overlay={menu}>
//             <div>
//               <Avatar className="avatar" size={28} icon={<UserOutlined />} />
//               <span className="name">{intl.get('FAKER')}</span>
//             </div>
//           </Dropdown>
//         </div>
//       </section>
//     );
//   }
// }
