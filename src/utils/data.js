const getNotes = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: true,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 2,
    title: "React Hooks",
    body: "React Hooks adalah fitur dalam React yang memungkinkan penggunaan state dan fungsionalitas React dalam komponen fungsi. Hooks seperti `useState` dan `useEffect` memungkinkan penyimpanan dan pembaruan state, serta eksekusi efek samping. Mereka mengurangi ketergantungan pada kelas dan membuat kode lebih terbaca. Dengan Hooks, pengembangan React menjadi lebih deklaratif dan ekspresif.",
    archived: true,
    createdAt: "2023-05-14T04:27:34.572Z",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum odio tempora ipsa magnam molestias officia facilis et? Porro, eligendi!",
    archived: true,
    createdAt: "2023-03-03T04:27:34.572Z",
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getNotes, formatDate };
