<template>
  <div class="box_error">
    <div class="error">
      <div class="code">
        <p>404</p>
      </div>
      <div class="message_en">
        <p>Page</p>
        <p>Not</p>
        <p>Found</p>
      </div>
    </div>
    <div class="message_ja">お探しのページは見つかりませんでした。</div>
  </div>
</template>

<style scoped>
.box_error {
  width: 460px;
  height: 260px;
  border: 1px solid #aaa;
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.code {
  font-size: 64px;
  font-weight: bold;
  color: #888;
}

.msg_en {
  margin: 0;
  font-size: 16px;
}

.msg_ja {
  font-size: 18px;
  text-align: center;
}
</style>
