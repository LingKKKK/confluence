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
      id: "rtew2rers",
      type: "h",
      tag: "ne-h3",
      son: [
        {
          id: "egds42rew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-underline", "ne-color-49", "ne-fontsize-13"],
          text: "aaaa"
        },
        {
          id: "e53sferew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-color-30", "ne-fontsize-14"],
          text: "bbbb"
        },
        {
          id: "egds223ew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-color-30", "ne-fontsize-12"],
          text: "ccccc"
        },
        {
          id: "kjkopiijo",
          type: "text",
          tag: "ne-text",
          attr: [],
          text: "ddddd"
        },
        {
          id: "kj123iijo",
          type: "text",
          tag: "ne-text",
          text: "eeeee"
        }
      ]
    },
    {
      id: "hdrerwefw2",
      type: "p",
      son: [
        {
          id: "egd242rew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-bold", "ne-underline", "ne-color-69", "ne-fontsize-17"],
          text: "uhijkkkk"
        },
        {
          id: "e53s5erew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-strikethrough", "ne-color-30", "ne-fontsize-14"],
          text: "iooooouk"
        },
        {
          id: "egd2223ew",
          type: "text",
          tag: "ne-text",
          attr: ["ne-color-30", "ne-fontsize-12"],
          text: "mmmmml;kj"
        }
      ]
    }
  ]
});

export { getTable, getFileData };
