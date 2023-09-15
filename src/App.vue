<template>
  <div
    :class="{ darkMode: darkMode }"
    class="grid h-screen w-screen px-12 xl:px-24"
  >
    <div
      :class="{ darkMode: darkMode }"
      class="h-screen grid grid-cols-5 bg-white"
    >
      <div class="hidden lg:block col-span-2 py-16">
        <div class="flex">
          <div class="ps-12">
            <svg
              class="pomo-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="107"
              viewBox="0 0 122 107"
              fill="none"
            >
              <rect
                x="3.78846"
                y="3.9423"
                width="113.654"
                height="98.4999"
                rx="26.5192"
                fill="#FFD9D9"
              />
              <path
                d="M60.6154 24.7788V55.0865L87.1346 81.6057"
                stroke="#471515"
                stroke-width="15.1538"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="3.78846"
                y="3.9423"
                width="113.654"
                height="98.4999"
                rx="26.5192"
                stroke="#471515"
                stroke-width="7.57692"
              />
            </svg>
          </div>
          <h1 class="title text-7xl font-extrabold p-3">Pomo</h1>
        </div>
        <div class="mt-36 text-[50px] font-extrabold leading-[1.2]">
          <h2>
            Pomodoro Timer <br />
            App Prototype
          </h2>
          <h2>
            <a href="#" class="underline" style="color: #ff4c4cb5">
              Desktop & Mobile</a
            >
          </h2>
        </div>
        <p class="mt-28 text-2xl font-bold" style="color: #808080">V. 0.1.0</p>
      </div>

      <div class="cornometres col-span-5 lg:col-span-3 flex relative">
        <focusTime
          @showModal="showModal"
          :closeBtn="breakClicked"
          @nextItem="nextItem"
          @click="changeItem('focus')"
          :autoResume="autoResume"
          :darkMode="darkMode"
          :class="{
            'absolute z-30': breakClicked === 1,
            'md:mx-auto z-20': breakClicked !== 1,
          }"
        >
        </focusTime>

        <shortBreak
          @showModal="showModal"
          :closeBtn="breakClicked"
          @nextItem="nextItem"
          @click="changeItem('short')"
          :autoResume="autoResume"
          :darkMode="darkMode"
          :class="{
            'md:mx-auto z-20': breakClicked === 1,
            'absolute z-30': breakClicked === 2,
            'absolute md:end-0 z-1': breakClicked === 3,
          }"
        >
        </shortBreak>
        <longBreak
          @showModal="showModal"
          :closeBtn="breakClicked"
          @nextItem="nextItem"
          @click="changeItem('long')"
          :autoResume="autoResume"
          :darkMode="darkMode"
          :class="{
            'absolute md:end-0 z-1': breakClicked !== 3,
            'absolute z-30': breakClicked === 3,
          }"
        ></longBreak>
      </div>
    </div>

    <modalSeting
      class="z-50 absolute self-center justify-self-center"
      :class="{ 'hidden': isCloseModal }"
      :color="modalColor"
      @closeModal="closeModal"
      @renderDarkMode="renderDarkMode"
    >
    </modalSeting>
  </div>
</template>

<script>
import focusTime from "./components/focusTime.vue";
import modalSeting from "./components/modalSeting.vue";
import shortBreak from "./components/shortBreak.vue";
import longBreak from "./components/longBreak.vue";
export default {
  name: "App",
  components: {
    focusTime,
    modalSeting,
    shortBreak,
    longBreak,
  },
  data() {
    return {
      breakClicked: 1,
      counter: 4,
      autoResume: 0,
      darkMode: localStorage.getItem("darkMode") === "true",
      isCloseModal: true,
    };
  },
  computed: {
    modalColor() {
      if (this.breakClicked === 1) {
        return { bgColor: "focus-color", btnColor: "#471515", class: "hidden" };
      } else if (this.breakClicked === 2) {
        return {
          bgColor: "short-break-color",
          btnColor: "#14401D",
          class: "hidden",
        };
      } else {
        return {
          bgColor: "long-break-color",
          btnColor: "#153047",
          class: "hidden",
        };
      }
    },
  },
  methods: {
    showModal() {
      this.isCloseModal = false;
      console.log('farhad');
    },
    closeModal() {
      this.isCloseModal=true
    },
    changeItem(page) {
      if (page === "focus" && this.breakClicked !== 1) {
        this.breakClicked = 1;
      }
      if (page === "short" && this.breakClicked !== 2) {
        this.breakClicked = 2;
      }
      if (page === "long" && this.breakClicked !== 3) {
        this.breakClicked = 3;
      }
    },
    nextItem(pagesManner) {
      setTimeout(() => {
        if (
          this.counter % (localStorage.getItem("untilLongBreak") * 2) === 0 &&
          localStorage.getItem("untilLongBreak") != 1
        ) {
          this.breakClicked = 3;
        } else if (localStorage.getItem("untilLongBreak") == 1) {
          this.breakClicked = (this.counter % 3) + 1;
        } else {
          this.breakClicked = pagesManner;
        }
        this.counter++;
        if (localStorage.getItem("auto") == true) {
          this.autoResume = this.breakClicked;
        }
      }, 20);
    },
    renderDarkMode(darkMode) {
      this.darkMode = darkMode;
    },
  },
};
</script>
