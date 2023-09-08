//window.addEventListener(`turbo:load`, () => {
function createCalendar(year, month) {
  const calendar = document.getElementById("calendar");
  const header = document.createElement("h1");
  header.textContent = `${month + 1}月 ${year}`;
  calendar.appendChild(header);

  const table = document.createElement("table");
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  // ヘッダー行の作成
  const headerRow = document.createElement("tr");
  daysOfWeek.forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // 月の初日の曜日を取得
  const firstDay = new Date(year, month, 1).getDay();

  // 月の日数を取得
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let currentDay = 1;
  let currentRow = document.createElement("tr");

  // 空白セルを追加
  for (let i = 0; i < firstDay; i++) {
    currentRow.appendChild(document.createElement("td"));
  }

  // 日付をセルに追加
  while (currentDay <= daysInMonth) {
    const td = document.createElement("td");
    td.textContent = currentDay;
    currentRow.appendChild(td);

    if (currentDay % 7 === firstDay % 7) {
      table.appendChild(currentRow);
      currentRow = document.createElement("tr");
    }

    currentDay++;
  }

  // カレンダーを表示
  calendar.appendChild(table);
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

createCalendar(currentYear, currentMonth)
//})