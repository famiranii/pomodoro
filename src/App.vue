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
        <focusTime @showModal="showModal" @click="breakClicked = 1"
          :class="{ 'absolute z-30': breakClicked === 1, 'mx-auto z-20': breakClicked !== 1 }"></focusTime>

        <shortBreak @showModal="showModal" @click="breakClicked = 2"
          :class="{ 'mx-auto z-20': breakClicked === 1, 'absolute z-30': breakClicked === 2, 'absolute end-0 z-1': breakClicked === 3 }">

        </shortBreak>
        <longBreak @showModal="showModal" @click="breakClicked = 3"
          :class="{ 'absolute end-0 z-1': breakClicked !== 3, 'absolute z-30': breakClicked === 3 }"></longBreak>
      </div>

    </div>

    <modalSeting v-for="(item, index) in modalColor" :key="index" :color="item" :class="item.class"
      @renderModalTimes="renderModalTimes" @closeModal="closeModal"
      class=" z-50 absolute self-center justify-self-center"></modalSeting>

  </div>
</template>

<script>
import focusTime from './components/focusTime.vue'
import modalSeting from './components/modalSeting.vue';
import shortBreak from './components/shortBreak.vue';
import longBreak from './components/longBreak.vue';
export default {
  name: 'App',
  components: {
    focusTime,
    modalSeting,
    shortBreak,
    longBreak,
  },
  data() {
    return {
      breakClicked: 1,
      modalColor: [
        { bgColor: 'focus-color', btnColor: '#471515', class: 'hidden' },
        { bgColor: 'short-break-color', btnColor: '#14401D', class: 'hidden' },
        { bgColor: 'long-break-color', btnColor: '#153047', class: 'hidden' },
      ],
    }
  },
  computed: {

  },
  methods: {
    showModal(color) {
      this.modalColor.forEach(element => {
        if (element.btnColor == color) {
          element.class = ''
        }
      });
    },
    closeModal(modal) {
      if (modal) {
        this.modalColor.forEach(element => {
          if (element.class == "") {
            element.class = 'hidden'
          }
        });
      }
    }
  },
}
</script>
