let delayCards = 0

function createCard(date, firstGame, secondGame, thirdGame) {
  delayCards = delayCards + 0.5
  return `
  <div class="card" style="animation-delay: ${delayCards}s">
    <h2>${date}</h2>
    <ul>
      ${firstGame}
      ${secondGame}
      ${thirdGame}
    </ul>
  </div>
  `
}

function createDate(day, weekday) {
  return `<strong>${day}</strong> <span>${weekday}</span>`
}

function createGame(team1, hour, team2) {
  return `
  <li >
    <img src="assets/icon-${team1}.svg" alt="Bandeira da Suíça" />
    <span>${hour}</span>
    <img src="assets/icon-${team2}.svg" alt="Bandeira de Camarões" />
  </li>
  `
}

document.querySelector(".cards").innerHTML =
  createCard(
    createDate("24/11", "quinta"),
    createGame("switzerland", "07:00", "cameroon"),
    createGame("portugal", "13:00", "ghana"),
    createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    createDate("28/11", "segunda"),
    createGame("south-korea", "10:00", "ghana"),
    createGame("brazil", "13:00", "switzerland"),
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    createDate("28/11", "segunda"),
    createGame("south-korea", "10:00", "ghana"),
    createGame("brazil", "13:00", "switzerland"),
    createGame("portugal", "16:00", "uruguay")
  )
