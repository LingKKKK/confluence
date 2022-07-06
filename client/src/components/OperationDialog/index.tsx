import React, { useState, useEffect } from "react";
import Crumb from "@components/Crumb/index";
import {
  UnlockOutlined,
  LockOutlined,
  FileDoneOutlined,
  LinkOutlined,
  EditFilled,
  StarOutlined,
  StarFilled,
  EyeFilled,
  EyeInvisibleFilled,
  ShareAltOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

import "./index.less";

interface operationItem {
  id: number;
  type: string;
  tag: any;
  desc: string;
  class: string;
  display: boolean;
}

const OperationHeader: React.FC = () => {
  const [operationList, setOperationList] = useState(Array<operationItem>());
  const [isWatch, setWatch] = useState(false);
  const [isCollect, setCollect] = useState(false);
  const [isLock, setLock] = useState(false);
  const [hasEnclosure, setEnclosure] = useState(false);

  useEffect(() => {
    setOperationList([
      {
        id: 1,
        type: "edit",
        tag: <EditFilled className="opearTag" />,
        desc: "编辑",
        class: "",
        display: true
      },
      {
        id: 2,
        type: "collect",
        tag: <StarOutlined className="opearTag" />,
        desc: "收藏",
        class: "",
        display: true
      },
      {
        id: 3,
        type: "unCollect",
        tag: <StarFilled className="opearTag" />,
        desc: "取消收藏",
        class: "",
        display: false
      },
      {
        id: 4,
        type: "watch",
        tag: <EyeFilled className="opearTag" />,
        desc: "关注",
        class: "",
        display: true
      },
      {
        id: 5,
        type: "unWatch",
        tag: <EyeInvisibleFilled className="opearTag" />,
        desc: "取消关注",
        class: "",
        display: false
      },
      {
        id: 6,
        type: "share",
        tag: <ShareAltOutlined className="opearTag" />,
        desc: "分享",
        class: "",
        display: true
      }, {
        id: 7,
        type: "other",
        tag: <EllipsisOutlined className="opearTag" />,
        desc: "",
        class: "",
        display: true
      }
    ]);
    setWatch(true);
    setCollect(true);
    setLock(true);
    setEnclosure(true);
  }, []);

  return (
    <div className="operationHeader">
      <div className="crumbList">
        <Crumb />
      </div>
      {isLock && <span className="operationBtn"><UnlockOutlined className="crumbIcon" /></span>}
      {!isLock && <span className="operationBtn"><LockOutlined className="crumbIcon" /></span>}
      {hasEnclosure && <span className="operationBtn"><LinkOutlined className="crumbIcon" /></span>}
      <div className="operationDialog">
        {operationList.map((item: operationItem) => {
          return (
            item.display && (
              <span className={`operationBtn ${item.type}`} key={item.id}>
                {item.tag}
                {item.desc}
              </span>
            )
          );
        })}
      </div>
    </div>
  );
};

export default OperationHeader;
