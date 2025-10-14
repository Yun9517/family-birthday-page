// 請將你的家庭照片放入 src/assets/photos 資料夾中
// 並在這裡更新照片的路徑和描述
// 範例：
// import photo1 from './assets/photos/your_photo_name_1.jpg';
// import photo2 from './assets/photos/your_photo_name_2.png';

// 為了讓網站能正常運行，請至少放入一張圖片並更新下方 src 的路徑。
// 如果沒有圖片，可以暫時使用一個佔位符圖片的 URL。

const photos = [
  {
    id: 1,
    src: 'https://via.placeholder.com/400x250?text=Your+Family+Photo+1', // 範例佔位符圖片
    alt: '家庭合照 1',
    description: '這是一張溫馨的家庭合照。',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/400x250?text=Your+Family+Photo+2', // 範例佔位符圖片
    alt: '生日派對',
    description: '去年生日派對的歡樂時光。',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/400x250?text=Your+Family+Photo+3', // 範例佔位符圖片
    alt: '旅行回憶',
    description: '全家一起出遊的美好回憶。',
  },
  // 請在這裡新增更多照片，並記得更新 src 路徑
];

export default photos;