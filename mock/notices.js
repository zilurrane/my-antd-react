const fakeNotices = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Test Notification 1',
    datetime: '2017-08-09',
    type: 'notification',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'Test Notification 2',
    datetime: '2017-08-08',
    type: 'notification',
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'Test Notification 3',
    datetime: '2017-08-07',
    read: true,
    type: 'notification',
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'Test Notification 4',
    datetime: '2017-08-07',
    type: 'notification',
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Message',
    description: 'Message Description',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Nayan - Call Me',
    description: 'Urgently Call me @9898989898',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000009',
    title: 'Parents Meeting',
    description: 'Time - 2017-01-12 20:00',
    extra: 'Conference 2',
    status: 'todo',
    type: 'event',
  },
];

const getNotices = (req, res) => {
  if (req.query && req.query.type) {
    const startFrom = parseInt(req.query.lastItemId, 10) + 1;
    const result = fakeNotices
      .filter(({ type }) => type === req.query.type)
      .map((notice, index) => ({
        ...notice,
        id: `0000000${startFrom + index}`,
      }));
    return res.json(startFrom > 24 ? result.concat(null) : result);
  }
  return res.json(fakeNotices);
};

export default {
  'GET /api/notices': getNotices,
};
