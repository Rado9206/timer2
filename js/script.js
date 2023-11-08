const settings = document.querySelector('.settings')
const settingsBtm = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const saveBtm = document.querySelector('.save')
const eventSpan = document.querySelector('.event')
let usersTime

const appUpdate = () => {
	eventSpan.textContent = eventName.value
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
    imageSection.style.backgroundImage = `url(${eventImg.value})`
}

settingsBtm.addEventListener('click', () => {
	settings.classList.toggle('active')
})

saveBtm.addEventListener('click', appUpdate)