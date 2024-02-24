let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Volta por favor ☹️";
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})

function Home() {
  return <h1> careca, je t'aime 🥰</h1>;
}

export default Home;