// 請將你的家庭照片放入 src/assets/photos 資料夾中
// 並在這裡更新照片的路徑和描述
// 範例：
// import photo1 from './assets/photos/your_photo_name_1.jpg';
// import photo2 from './assets/photos/your_photo_name_2.png';

// 為了讓網站能正常運行，請至少放入一張圖片並更新下方 src 的路徑。
// 如果沒有圖片，可以暫時使用一個佔位符圖片的 URL。

// 照片會從 `public` 資料夾讀取。
// 如果您新增了照片到 `public` 資料夾，請依照以下格式添加到這個陣列中。

const photos = [
  {
    id: 1,
    src: '/birthday_01.jpg', // 照片路徑，相對於 public 資料夾
    alt: '生日照片 1',
  },
  // {
  //   id: 2,
  //   src: '/your_photo_name.jpg',
  //   alt: '照片描述',
  //   description: '關於這張照片的故事。',
  // },
];

export default photos;