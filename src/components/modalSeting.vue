<template>
  <div :class="color.bgColor" class="pomodoro-modal">
    <div>
      <h4 class="font-bold text-2xl">setting</h4>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ph:x">
          <path id="Vector"
            d="M14.4633 13.6615C14.5689 13.7682 14.6281 13.9122 14.6281 14.0623C14.6281 14.2124 14.5689 14.3564 14.4633 14.4631C14.3558 14.567 14.212 14.6252 14.0625 14.6252C13.9129 14.6252 13.7692 14.567 13.6617 14.4631L8.99999 9.79433L4.33827 14.4631C4.23076 14.567 4.08705 14.6252 3.93749 14.6252C3.78793 14.6252 3.64423 14.567 3.53671 14.4631C3.43108 14.3564 3.37183 14.2124 3.37183 14.0623C3.37183 13.9122 3.43108 13.7682 3.53671 13.6615L8.20546 8.9998L3.53671 4.33808C3.44701 4.22879 3.40117 4.09004 3.40811 3.94882C3.41504 3.8076 3.47426 3.67401 3.57423 3.57404C3.67421 3.47406 3.8078 3.41485 3.94901 3.40791C4.09023 3.40098 4.22898 3.44682 4.33827 3.53651L8.99999 8.20526L13.6617 3.53651C13.771 3.44682 13.9097 3.40098 14.051 3.40791C14.1922 3.41485 14.3258 3.47406 14.4257 3.57404C14.5257 3.67401 14.5849 3.8076 14.5919 3.94882C14.5988 4.09004 14.553 4.22879 14.4633 4.33808L9.79452 8.9998L14.4633 13.6615Z"
            :fill=color.btnColor />
        </g>
      </svg>
    </div>
    <div>
      <span>Dark mode</span>
      <div class="setting-btn flex rounded-full w-10 h-5 items-center p-1">
        <div :class="color.bgColor" class="w-5 h-5 rounded-full"></div>
      </div>
    </div>
    <div>
      <span>Focus lenght</span>
      <div class="w-20 h-10 flex rounded-lg border divide-x">
        <div class="w-2/3 flex items-center justify-center">
          {{ focusTime }}
        </div>
        <div class="w-1/3 divide-y">
          <button @click="updateValue('increase', 'focusTime')" class="h-1/2 flex items-center justify-center">
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L20.1962 12.5H9.80385L15 5Z" :fill=color.btnColor />
              <path d="M0 0H30H0ZM30 18H0H30ZM-1 18V0H1V18H-1ZM30 0V18V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2290)" />
            </svg>
          </button>
          <button @click="updateValue('decrease', 'focusTime')" class="h-1/2 flex items-center justify-center">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5L9.80385 8L20.1962 8L15 15.5Z" :fill=color.btnColor />
              <path d="M-1 -1H29V1H1L-1 -1ZM29 20H0H29ZM-1 20V-1L1 1V20H-1ZM29 0V20V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2300)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div>
      <span>Pomodoros until long break</span>
      <div class="w-20 h-10 flex rounded-lg border divide-x">
        <div class="w-2/3 flex items-center justify-center">
          {{ pomodorosUntilLongBreak }}
        </div>
        <div class="w-1/3 divide-y">
          <button @click="updateValue('increase', 'pomodorosUntilLongBreak')" class="h-1/2 flex items-center justify-center">
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L20.1962 12.5H9.80385L15 5Z" :fill=color.btnColor />
              <path d="M0 0H30H0ZM30 18H0H30ZM-1 18V0H1V18H-1ZM30 0V18V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2290)" />
            </svg>
          </button>
          <button @click="updateValue('decrease', 'pomodorosUntilLongBreak')" class="h-1/2 flex items-center justify-center">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5L9.80385 8L20.1962 8L15 15.5Z" :fill=color.btnColor />
              <path d="M-1 -1H29V1H1L-1 -1ZM29 20H0H29ZM-1 20V-1L1 1V20H-1ZM29 0V20V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2300)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div>
      <span>Short break lenght</span>
      <div class="w-20 h-10 flex rounded-lg border divide-x">
        <div class="w-2/3 flex items-center justify-center">
          {{ shortBreakTime }}
        </div>
        <div class="w-1/3 divide-y">
          <button @click="updateValue('increase', 'shortBreakTime')" class="h-1/2 flex items-center justify-center">
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L20.1962 12.5H9.80385L15 5Z" :fill=color.btnColor />
              <path d="M0 0H30H0ZM30 18H0H30ZM-1 18V0H1V18H-1ZM30 0V18V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2290)" />
            </svg>
          </button>
          <button @click="updateValue('decrease', 'shortBreakTime')" class="h-1/2 flex items-center justify-center">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5L9.80385 8L20.1962 8L15 15.5Z" :fill=color.btnColor />
              <path d="M-1 -1H29V1H1L-1 -1ZM29 20H0H29ZM-1 20V-1L1 1V20H-1ZM29 0V20V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2300)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div>
      <span>Long break lenght</span>
      <div class="w-20 h-10 flex rounded-lg border divide-x">
        <div class="w-2/3 flex items-center justify-center">
          {{ longBreakTime }}
        </div>
        <div class="w-1/3 divide-y">
          <button @click="updateValue('increase', 'longBreakTime')" class="h-1/2 flex items-center justify-center">
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L20.1962 12.5H9.80385L15 5Z" :fill=color.btnColor />
              <path d="M0 0H30H0ZM30 18H0H30ZM-1 18V0H1V18H-1ZM30 0V18V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2290)" />
            </svg>
          </button>
          <button @click="updateValue('decrease', 'longBreakTime')" class="h-1/2 flex items-center justify-center">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5L9.80385 8L20.1962 8L15 15.5Z" :fill=color.btnColor />
              <path d="M-1 -1H29V1H1L-1 -1ZM29 20H0H29ZM-1 20V-1L1 1V20H-1ZM29 0V20V0Z" fill="black" fill-opacity="0.15"
                mask="url(#path-1-inside-1_210_2300)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div>
      <span>Auto resume timer</span>
      <div class="setting-btn flex rounded-full w-10 h-5 items-center p-1">
        <div :class="color.bgColor" class="w-5 h-5 rounded-full "></div>
      </div>
    </div>
    <div>
      <span>Sound</span>
      <div class="setting-btn flex rounded-full w-10 h-5 items-center p-1">
        <div :class="color.bgColor" class="w-5 h-5 rounded-full"></div>
      </div>
    </div>
    <div>
      <span>Notifications</span>
      <div class="setting-btn flex rounded-full w-10 h-5 items-center p-1">
        <div :class="color.bgColor" class="w-5 h-5 rounded-full"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    color: Object
  },
  data() {
    return {
      darkMode: false,
      autoResume: false,
      Sound: false,
      Notification: false,
      focusTime: 25,
      pomodorosUntilLongBreak: 4,
      shortBreakTime: 5,
      longBreakTime: 15,
    }
  },
  created() {
    this.$emit('allValue',this.$data)
  },
  methods: {
    updateValue(action, key) {
      if (action === 'increase') {
        this[key]++;
      } else if (action === 'decrease' && this[key] > 1) {
        this[key]--;
      }
      this.$emit('allValue',this.$data)
      console.log(this.shortBreakTime);
    },
  },
}
</script>

<style></style>