const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hiddeAllContents()
    hiddeAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hiddeAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}

function hiddeAllItems() {
  listItems.forEach(item => item.classList.remove('active'));
}
