<template>
    <div :class="{ 'darkMode-items': darkMode }"
        class="short-break-color short-break w-11/12 md:w-5/12  py-32 cursor-default">
        <div
            class="short-break-title flex items-center px-3 py-0.5 mb-16 font-medium space-x-1.5 text-lg rounded-3xl border-2">

            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="ph:coffee">
                    <path id="Vector"
                        d="M8.26109 6.1735V2.87792C8.26109 2.65941 8.34789 2.44985 8.5024 2.29534C8.65691 2.14083 8.86647 2.05403 9.08498 2.05403C9.30349 2.05403 9.51305 2.14083 9.66756 2.29534C9.82207 2.44985 9.90887 2.65941 9.90887 2.87792V6.1735C9.90887 6.39201 9.82207 6.60157 9.66756 6.75608C9.51305 6.91059 9.30349 6.99739 9.08498 6.99739C8.86647 6.99739 8.65691 6.91059 8.5024 6.75608C8.34789 6.60157 8.26109 6.39201 8.26109 6.1735ZM12.3806 6.99739C12.5991 6.99739 12.8086 6.91059 12.9631 6.75608C13.1176 6.60157 13.2044 6.39201 13.2044 6.1735V2.87792C13.2044 2.65941 13.1176 2.44985 12.9631 2.29534C12.8086 2.14083 12.5991 2.05403 12.3806 2.05403C12.162 2.05403 11.9525 2.14083 11.798 2.29534C11.6435 2.44985 11.5567 2.65941 11.5567 2.87792V6.1735C11.5567 6.39201 11.6435 6.60157 11.798 6.75608C11.9525 6.91059 12.162 6.99739 12.3806 6.99739ZM15.6761 6.99739C15.8946 6.99739 16.1042 6.91059 16.2587 6.75608C16.4132 6.60157 16.5 6.39201 16.5 6.1735V2.87792C16.5 2.65941 16.4132 2.44985 16.2587 2.29534C16.1042 2.14083 15.8946 2.05403 15.6761 2.05403C15.4576 2.05403 15.2481 2.14083 15.0935 2.29534C14.939 2.44985 14.8522 2.65941 14.8522 2.87792V6.1735C14.8522 6.39201 14.939 6.60157 15.0935 6.75608C15.2481 6.91059 15.4576 6.99739 15.6761 6.99739ZM25.5628 12.7646V13.5885C25.5623 14.6361 25.1626 15.6441 24.4452 16.4075C23.7277 17.1709 22.7464 17.6322 21.7008 17.6977C21.1334 19.2849 20.1774 20.7047 18.9202 21.8275H21.4434C21.6619 21.8275 21.8714 21.9143 22.026 22.0688C22.1805 22.2233 22.2673 22.4328 22.2673 22.6514C22.2673 22.8699 22.1805 23.0794 22.026 23.2339C21.8714 23.3884 21.6619 23.4752 21.4434 23.4752H3.31773C3.09922 23.4752 2.88966 23.3884 2.73515 23.2339C2.58064 23.0794 2.49384 22.8699 2.49384 22.6514C2.49384 22.4328 2.58064 22.2233 2.73515 22.0688C2.88966 21.9143 3.09922 21.8275 3.31773 21.8275H5.8409C4.79098 20.898 3.94987 19.7566 3.37296 18.4785C2.79605 17.2005 2.49644 15.8147 2.49384 14.4124V9.46907C2.49384 9.25056 2.58064 9.041 2.73515 8.88649C2.88966 8.73198 3.09922 8.64517 3.31773 8.64517H21.4434C22.5359 8.64517 23.5837 9.07919 24.3563 9.85174C25.1288 10.6243 25.5628 11.6721 25.5628 12.7646ZM20.6195 10.293H4.14162V14.4124C4.14497 15.9591 4.58198 17.4738 5.40301 18.7845C6.22404 20.0953 7.39619 21.1495 8.78632 21.8275H15.9748C17.0132 21.32 17.9338 20.6005 18.677 19.7153C19.4203 18.8301 19.9697 17.799 20.2899 16.6884C20.3014 16.6697 20.3085 16.6485 20.3105 16.6266C20.5176 15.9069 20.6216 15.1614 20.6195 14.4124V10.293ZM23.9151 12.7646C23.9145 12.254 23.7557 11.7561 23.4607 11.3393C23.1656 10.9225 22.7487 10.6074 22.2673 10.4371V14.4124C22.2679 14.9299 22.2266 15.4465 22.1437 15.9572C22.6549 15.8062 23.1036 15.494 23.4228 15.0671C23.742 14.6402 23.9147 14.1216 23.9151 13.5885V12.7646Z"
                        :fill="darkMode ? '#FFF2F2' : '#14401D'" />
                </g>
            </svg>

            <span>Short Break</span>
        </div>



        <div :class="{ 'font-extrabold': fontBold }" class="flex flex-col items-center relative short-break-timer">
            <span>{{ padZero(shortBreakTime) }}</span>
            <span class="pt-20 pb-10">{{ showSeconds }}</span>
        </div>
        <div :class="{ 'hidden': showDropdown, }" class="dropdown short-break-color">
            <drop-down @showModal="showModal" :darkMode="darkMode" :svgColor="'#14401D'"></drop-down>
        </div>



        <div :class="{ 'pointer-events-none': closeBtn !== 2 }" class="flex items-center space-x-3 mt-3 z-10">
            <button id="dropdownBtn" @click="toggleDropdown"
                class="short-break-btn w-12 h-12 rounded-2xl flex items-center justify-center">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ph:dots-three-outline-fill">
                        <path id="Vector"
                            d="M16.5165 13.638C16.5165 14.2083 16.3474 14.7658 16.0305 15.24C15.7136 15.7143 15.2633 16.0839 14.7364 16.3021C14.2095 16.5204 13.6297 16.5775 13.0703 16.4662C12.5109 16.3549 11.9971 16.0803 11.5938 15.677C11.1905 15.2737 10.9159 14.7599 10.8046 14.2006C10.6934 13.6412 10.7505 13.0614 10.9687 12.5345C11.187 12.0076 11.5566 11.5572 12.0308 11.2403C12.505 10.9235 13.0625 10.7544 13.6329 10.7544C14.3968 10.7571 15.1287 11.0618 15.6689 11.602C16.2091 12.1422 16.5138 12.874 16.5165 13.638V13.638ZM5.39393 10.7544C4.8236 10.7544 4.26608 10.9235 3.79187 11.2403C3.31766 11.5572 2.94806 12.0076 2.72981 12.5345C2.51155 13.0614 2.45445 13.6412 2.56571 14.2006C2.67698 14.7599 2.95162 15.2737 3.3549 15.677C3.75818 16.0803 4.27199 16.3549 4.83136 16.4662C5.39073 16.5775 5.97053 16.5204 6.49745 16.3021C7.02436 16.0839 7.47472 15.7143 7.79158 15.24C8.10843 14.7658 8.27756 14.2083 8.27756 13.638C8.27484 12.874 7.97016 12.1422 7.42996 11.602C6.88977 11.0618 6.15788 10.7571 5.39393 10.7544V10.7544ZM21.8718 10.7544C21.3015 10.7544 20.7439 10.9235 20.2697 11.2403C19.7955 11.5572 19.4259 12.0076 19.2077 12.5345C18.9894 13.0614 18.9323 13.6412 19.0436 14.2006C19.1548 14.7599 19.4295 15.2737 19.8328 15.677C20.236 16.0803 20.7499 16.3549 21.3092 16.4662C21.8686 16.5775 22.4484 16.5204 22.9753 16.3021C23.5022 16.0839 23.9526 15.7143 24.2694 15.24C24.5863 14.7658 24.7554 14.2083 24.7554 13.638C24.7527 12.874 24.448 12.1422 23.9078 11.602C23.3676 11.0618 22.6357 10.7571 21.8718 10.7544Z"
                            :fill="darkMode ? '#FFF2F2' : '#14401D'" />
                    </g>
                </svg>
            </button>
            <button @click="runOrpauseTimer"
                class="short-break-play-btn w-20 h-16 rounded-2xl flex items-center justify-center">
                <svg v-if="isIconChanged" width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="ph:play-fill">
                        <path id="Vector"
                            d="M30 16C29.9993 16.3439 29.9104 16.6818 29.7419 16.9816C29.5734 17.2814 29.3309 17.533 29.0375 17.7125L11.0375 28.7C10.7377 28.89 10.3914 28.9939 10.0365 29.0006C9.68161 29.0072 9.33171 28.9162 9.02501 28.7375C8.71377 28.5667 8.45432 28.3152 8.27394 28.0095C8.09356 27.7037 7.99893 27.355 8.00001 27V4.99996C7.99893 4.64496 8.09356 4.29623 8.27394 3.99047C8.45432 3.68471 8.71377 3.43322 9.02501 3.26246C9.33171 3.08376 9.68161 2.99275 10.0365 2.99936C10.3914 3.00597 10.7377 3.10996 11.0375 3.29996L29.0375 14.2875C29.3309 14.4669 29.5734 14.7185 29.7419 15.0183C29.9104 15.3181 29.9993 15.6561 30 16Z"
                            :fill="darkMode ? '#FFF2F2' : '#14401D'" />
                    </g>
                </svg>
                <svg v-else width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ph:pause-fill">
                        <path id="Vector"
                            d="M22.5628 5.39907V21.8769C22.5628 22.3139 22.3892 22.7331 22.0802 23.0421C21.7712 23.3511 21.3521 23.5247 20.915 23.5247H17.2075C16.7705 23.5247 16.3514 23.3511 16.0424 23.0421C15.7333 22.7331 15.5597 22.3139 15.5597 21.8769V5.39907C15.5597 4.96205 15.7333 4.54293 16.0424 4.23391C16.3514 3.92489 16.7705 3.75128 17.2075 3.75128H20.915C21.3521 3.75128 21.7712 3.92489 22.0802 4.23391C22.3892 4.54293 22.5628 4.96205 22.5628 5.39907ZM9.79248 3.75128H6.08497C5.64795 3.75128 5.22882 3.92489 4.9198 4.23391C4.61078 4.54293 4.43718 4.96205 4.43718 5.39907V21.8769C4.43718 22.3139 4.61078 22.7331 4.9198 23.0421C5.22882 23.3511 5.64795 23.5247 6.08497 23.5247H9.79248C10.2295 23.5247 10.6486 23.3511 10.9576 23.0421C11.2667 22.7331 11.4403 22.3139 11.4403 21.8769V5.39907C11.4403 4.96205 11.2667 4.54293 10.9576 4.23391C10.6486 3.92489 10.2295 3.75128 9.79248 3.75128V3.75128Z"
                            :fill="darkMode ? '#FFF2F2' : '#14401D'" />
                    </g>
                </svg>
            </button>
            <button @click="nextItem" class="short-break-btn w-12 h-12 rounded-2xl flex items-center justify-center">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ph:fast-forward-fill" clip-path="url(#clip0_104_1901)">
                        <path id="Vector"
                            d="M26.2611 13.638C26.2623 13.9142 26.1941 14.1862 26.0627 14.4292C25.9314 14.6721 25.7411 14.8781 25.5093 15.0283L16.3229 20.9294C16.0736 21.091 15.7852 21.1821 15.4884 21.1932C15.1916 21.2043 14.8972 21.1349 14.6366 20.9925C14.3759 20.85 14.1586 20.6397 14.0077 20.3839C13.8567 20.128 13.7777 19.8362 13.7791 19.5391V15.1519L4.78835 20.9294C4.53906 21.091 4.25074 21.1821 3.9539 21.1932C3.65705 21.2043 3.36273 21.1349 3.10208 20.9925C2.84142 20.85 2.62412 20.6397 2.47318 20.3839C2.32223 20.128 2.24325 19.8362 2.24458 19.5391V7.73685C2.24325 7.4398 2.32223 7.14792 2.47318 6.89208C2.62412 6.63625 2.84142 6.42597 3.10208 6.28351C3.36273 6.14104 3.65705 6.07169 3.9539 6.08278C4.25074 6.09388 4.53906 6.18501 4.78835 6.34653L13.7791 12.1241V7.73685C13.7777 7.4398 13.8567 7.14792 14.0077 6.89208C14.1586 6.63625 14.3759 6.42597 14.6366 6.28351C14.8972 6.14104 15.1916 6.07169 15.4884 6.08278C15.7852 6.09388 16.0736 6.18501 16.3229 6.34653L25.5093 12.2477C25.7411 12.3978 25.9314 12.6039 26.0627 12.8468C26.1941 13.0897 26.2623 13.3618 26.2611 13.638Z"
                            :fill="darkMode ? '#FFF2F2' : '#14401D'" />
                    </g>
                    <defs>
                        <clipPath id="clip0_104_1901">
                            <rect width="26.3646" height="26.3646" fill="white" transform="translate(0.18486 0.455688)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>

        </div>
    </div>
</template>

<script>
import dropDown from './dropDown.vue';
export default {
    name: 'shortBreakTime',
    components: {
        dropDown,
    },
    props: {
        closeBtn: Number,
        autoResume: Number,
        darkMode: Boolean
    },
    data() {
        return {
            shortBreakTime: localStorage.getItem('shortBreakTime'),
            shortBreakTimeValue: localStorage.getItem('shortBreakTime'),
            seconds: 0,
            showSeconds: 0,
            intervalId: null,
            isIconChanged: true,
            showDropdown: true,
            fontBold: false
        }
    },
    created() {
        this.showSeconds = this.padZero(this.showSeconds)
        document.addEventListener('click', this.handleDocumentClick);
        if (localStorage.getItem('shortBreakTime') === null) {
            this.shortBreakTime = 5
        }
        this.seconds = this.shortBreakTime * 60
    },
    watch: {
        autoResume(newValue) {
            if (newValue === 2) {
                this.runOrpauseTimer();
            }
        }
    },
    methods: {
        runOrpauseTimer() {
            this.fontBold = true
            if (this.isIconChanged) {
                this.intervalId = setInterval(this.decreasTime, 1000)
                this.isIconChanged = false
            } else {
                this.isIconChanged = true
                clearInterval(this.intervalId)
            }
        },
        decreasTime() {
            if (this.seconds == 0) {
                clearInterval(this.intervalId)
                this.$emit('nextItem', 1)
                this.shortBreakTime = localStorage.getItem('shortBreakTime')
                this.isIconChanged = true
                this.fontBold = false
            } else {
                this.seconds--;
                this.shortBreakTime = this.padZero(Math.floor(this.seconds / 60))
                this.showSeconds = this.padZero(this.seconds % 60)
            }
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },
        handleDocumentClick(event) {
            if (this.$el.contains(event.target)) {
                return;
            } else {
                this.showDropdown = true;
            }
            if (localStorage.getItem('shortBreakTime') !== this.shortBreakTimeValue) {
                this.shortBreakTimeValue = localStorage.getItem('shortBreakTime')
                this.shortBreakTime = localStorage.getItem('shortBreakTime')
                this.seconds = this.shortBreakTime * 60
                this.showSeconds = this.padZero(0)
            }
        },
        showModal(color) {
            this.$emit('showModal', color)
        },
        nextItem() {
            this.$emit('nextItem', 1)
            clearInterval(this.intervalId)
            this.shortBreakTime = localStorage.getItem('shortBreakTime')
            this.seconds = this.shortBreakTime * 60
            this.showSeconds = this.padZero(0)
            this.isIconChanged = true
            this.fontBold = false
        },
    },
    computed: {
        padZero() {
            return number => number.toString().padStart(2, '0');
        },
    },

}
</script>

<style></style>