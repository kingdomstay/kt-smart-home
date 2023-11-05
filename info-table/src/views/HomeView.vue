<script>
const date = new Date();
export default {
  data() {
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      amPm: "AM",
      interval: 0
    };
  },
  mounted() {
    this.interval = setInterval(this.updateClock, 1000);
  },
  methods: {
    updateClock() {
      const date = new Date();

      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
      this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    }
  }
}
</script>

<template>
  <div style="display: flex; column-gap: 30px;">
    <div style="height: 326px; flex: 1; display: flex; align-items: center; justify-content: center" class="card">
      <p style="font-size: 256px; margin: 0; font-weight: 500; font-family: 'Google Sans', Arial, sans-serif; white-space: nowrap; text-align: center; color: white;">{{hours}}<span style="transform: translateY(-13px); display: inline-block; opacity: .65;">:</span>{{minutes}}</p>
    </div>
    <div class="card" style="flex: 0.2; padding: 17px;">
      <div style="aspect-ratio: 1; border-radius: 25px; padding: 0; background: #E4680E; margin: 0; margin-bottom: 15px;" class="card">
      </div>
      <div style="aspect-ratio: 1; border-radius: 25px; padding: 0; background: #506B8C; margin: 0;" class="card">
      </div>
    </div>
  </div>
  <div style="height: 653px;" class="card">
    <p style="font-family: 'Google Sans', Arial, sans-serif; font-size: 164px; color: white;">Привет, мир!</p>
  </div>
  <div style="height: 350px;" class="card">

  </div>
  <div style="height: 250px;" class="card">

  </div>
  <div class="card">

  </div>
</template>
