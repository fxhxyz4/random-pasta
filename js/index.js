pastaText = document.querySelector(".main__text"),
copyBtn = document.querySelector(".main__copy"),
rndBtn = document.querySelector(".main__button"),
alertBtn = document.getElementById("id")

function rnd(){
    const rndpst = [
        "Это я - твой единственный зритель. Я на протяжении многих лет создавал иллюзию того, что тебя смотрят много людей, но это был я. Сейчас напишу это сообщение со всех аккаунтов.",
        "Ребята, я новенький на твиче, почему у меня одинаковые сообщения от разных ников отображаются? я надеюсь это баг, вы же не дибилы ебаные чтобы одно и то же сообщение отправлять?.",
        "Чат, я хочу сказать что Вы сегодня просто умнички. Никто не спамит, никто не копирует пасты, никто не проявляет агрессию. Я не могу представить более мирного и дружелюбного чата чем этот. Спасибо за то что уважаете других пользователей",
        "не реализовался в жизни? сидишь у мамки на шее? по матеше двойка? - выход есть: кидать копипасты в чатик SeemsGood",
        "Привет чат. Я тут первый раз. А тут разрешены пасты? Просто у меня болезнь и если я вижу сообщение длиннее 3 строчек у меня начинается судорога пока я его не скопирую и не отправлю в чат. Модеры и стример строго не судите, иначе я вынужден буду репортить ваш канал за ущемление моего недуга. Ещё раз простите.",
        "сейчас бы пасты пускать в лучшем чате твича. подливы под себя пустите, пастеры",
        "Basedge Tssk НЕ СРAТЬ",
        "тут всегда чатик такой странный, и создаётся такое впечатление, что тут сидит какой-то класс школы, не в плане фу школьники, а тупо целый класс сидит, общается о чём-то своём",
        "Бля, мне нравится этот чат. 99% чатеров хуесосят и рофлят с головача, а 1% это 'приятные' сообщения от подговоренных модеров, которые сидят в несколько окон. Я чувствую, что я там где и должен быть.",
        "парни, плюсы в чат написали, а номера телефонов нет?!"
    ];
   return (rndpst[Math.floor(Math.random() * 10)]);
}

rndBtn.addEventListener("click", () => {
    const rndp = rnd();
    pastaText.innerText = rndp;
    console.log(`${rndp}`)
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(pastaText.innerText);
    alertBtn.classList.add("active")
});