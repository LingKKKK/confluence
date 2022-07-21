import Mock from "mockjs";

const getTable = Mock.mock(location.origin + "/api/getTable.json", "get", {
  result: [
    {
      aaaaa: 11111,
      bbbbb: 11111,
      ccccc: 11111,
      ddddd: 11111,
      eeeeee: 11111,
      ffffff: 11111
    },
    {
      aaaaa: 22222,
      bbbbb: 22222,
      ccccc: 22222,
      ddddd: 22222,
      eeeeee: 22222,
      ffffff: 22222
    },
    {
      aaaaa: 33333,
      bbbbb: 33333,
      ccccc: 33333,
      ddddd: 33333,
      eeeeee: 33333,
      ffffff: 33333
    }
  ]
});

const getFileData = Mock.mock(location.origin + "/api/getFileData.json", "get", {
  // result: [
  //   {
  //     id: "hdrerwefw2",
  //     type: "p",
  //     son: [
  //       {
  //         id: "egds42rew",
  //         type: "text",
  //         tag: "ne-text",
  //         text: "11"
  //       }
  //     ]
  //   }, {
  //     id: "hdre1wefw2",
  //     type: "p",
  //     son: [
  //       {
  //         id: "egds42rew",
  //         type: "text",
  //         tag: "ne-text",
  //         text: "22"
  //       }
  //     ]
  //   }, {
  //     id: "hdr41wefw2",
  //     type: "p",
  //     son: [
  //       {
  //         id: "egds42rew",
  //         type: "text",
  //         tag: "ne-text",
  //         text: "33"
  //       }
  //     ]
  //   }
  // ]
  result: [
    {
      id: "11111",
      type: "h",
      tag: "ne-h3",
      son: [
        {
          id: "22222",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-underline", "ne-color-49", "ne-fontsize-13"],
          text: "aaaa"
        },
        {
          id: "333333",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-color-30", "ne-fontsize-14"],
          text: "bbbb"
        }
      ]
    },
    {
      id: "56ytrddg",
      type: "h",
      tag: "ne-h3",
      son: [
        {
          id: "444444",
          type: "text",
          tag: "ne-text",
          attr: ["ne-color-30", "ne-fontsize-12"],
          text: "ccccc"
        },
        {
          id: "55555",
          type: "text",
          tag: "ne-text",
          attr: [],
          text: "ddddd"
        },
        {
          id: "666666",
          type: "text",
          tag: "ne-text",
          text: "eeeee"
        }
      ]
    },
    {
      id: "777777",
      type: "p",
      son: [
        {
          id: "sssssssss",
          type: "text",
          tag: "ne-text",
          attr: ["ne-color-30", "ne-fontsize-12"],
          text: "ccccccccccc"
        }
      ]
    },
    {
      id: "dwdawdad",
      type: "p",
      son: [
        {
          id: "retyer",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-31", "ne-fontsize-17"],
          text: "aaa"
        }, {
          id: "hrtefaf",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-31", "ne-fontsize-17"],
          text: "bbb"
        }, {
          id: "hdfghv",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-31", "ne-fontsize-17"],
          text: "ccc"
        }, {
          id: "et234tgds",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-31", "ne-fontsize-17"],
          text: "ddd"
        }, {
          id: "lpokpop",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-31", "ne-fontsize-17"],
          text: "eee"
        }
      ]
    },
    {
      id: "ggdsgsdsd",
      type: "p",
      son: [
        {
          id: "ggsfsf",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-color-30", "ne-fontsize-14"],
          text: "bbbbbbbbbbbbbbbb"
        },
        {
          id: "9999999",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-color-30", "ne-fontsize-14"],
          text: "ddddddddddddd"
        }
      ]
    }
  ]
});

export { getTable, getFileData };
