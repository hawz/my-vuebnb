<template>
  <div class="login-container">
    <form action="/login" method="post" role="form">
      <div class="form-control">
        <input type="email" name="email" id="email" placeholder="Email Address" required autofocus />
      </div>
      <div class="form-control">
        <input type="password" name="password" id="password" placeholder="Passoword" required />
      </div>
      <div class="form-control">
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  padding-top: 40px;
}

@media (min-width: 744px) {
  form {
    padding-top: 80px;
  }
}

.form-control {
  margin-bottom: 1em;
}
input[type="email"],
input[type="password"],
button,
label {
  width: 100%;
  font-size: 19px !important;
  line-height: 24px;
  color: #484848;
  font-weight: 300;
}

input {
  background-color: transparent;
  padding: 11px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  box-sizing: border-box;
}

button {
  background-color: #4fc08d;
  color: #ffffff;
  cursor: pointer;
  border: #4fc08d;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>