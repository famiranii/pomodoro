<template>
  <div class="grid grid-cols-12 h-screen w-screen">
    <div class="col-span-1"></div>
    <div class="h-screen col-span-10 grid grid-cols-5 bg-white">
      <div class="col-span-2 py-16 ">
        <div class="flex">
          <svg class="pomo-logo" xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 122 107"
            fill="none">
            <rect x="3.78846" y="3.9423" width="113.654" height="98.4999" rx="26.5192" fill="#FFD9D9" />
            <path d="M60.6154 24.7788V55.0865L87.1346 81.6057" stroke="#471515" stroke-width="15.1538"
              stroke-linecap="round" stroke-linejoin="round" />
            <rect x="3.78846" y="3.9423" width="113.654" height="98.4999" rx="26.5192" stroke="#471515"
              stroke-width="7.57692" />
          </svg>
          <h1 class="title text-7xl font-extrabold p-3">Pomo</h1>
        </div>
        <div class=" mt-36 text-[50px] font-extrabold leading-[1.2]">
          <h2> Pomodoro Timer <br> App Prototype </h2>
          <h2><a href="#" class="underline" style="color: #FF4C4CB5;"> Desktop & Mobile</a></h2>
        </div>
        <p class="mt-28 text-2xl font-bold" style="color: #808080;">V. 0.1.0</p>
      </div>



      <div class="cornometres col-span-3 flex relative">
        <focus-time :pomodoroTime="focusTime" :timerClass="focusClass" @click="breakClicked = 1"
          :class="{ 'absolute z-30': breakClicked === 1, 'mx-auto z-20': breakClicked !== 1 }"></focus-time>
        <focusTime :pomodoroTime="shortBreakTime" :timerClass="shortBreakClass" @click="breakClicked = 2"
          :class="{ 'mx-auto z-20': breakClicked === 1, 'absolute z-30': breakClicked === 2, 'absolute end-0 z-1': breakClicked === 3 }">
        </focusTime>
        <focusTime :pomodoroTime="longBreakTime" :timerClass="longBreakClass" @click="breakClicked = 3"
          :class="{ 'absolute end-0 z-1': breakClicked !== 3, 'absolute z-30': breakClicked === 3 }"></focusTime>
      </div>
    </div>
  </div>
</template>

<script>
import focusTime from './components/focusTime.vue'
export default {
  name: 'App',
  components: {
    focusTime,
  },
  data() {
    return {
      breakClicked: 1,
      focusClass: { timerStyle: 'focus', titleName: 'Focus', bgColor: 'focus-color', title: 'focus-title', numberColor: 'focus-timer', btnColor: 'focus-btn', playBtnColor: 'focus-play-btn', bttnColor: '#471515' },
      shortBreakClass: { timerStyle: 'short-break', titleName: 'Short Break', bgColor: 'short-break-color', title: 'short-break-title', numberColor: 'short-break-timer', btnColor: 'short-break-btn', playBtnColor: 'short-break-play-btn', bttnColor: '#14401D' },
      longBreakClass: { timerStyle: 'long-break', titleName: 'Long Break', bgColor: 'long-break-color', title: 'long-break-title', numberColor: 'long-break-timer', btnColor: 'long-break-btn', playBtnColor: 'long-break-play-btn', bttnColor: '#153047' },
      focusTime: 25,
      shortBreakTime: 5,
      longBreakTime: 15,

    }
  },
}
</script>
