const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('勿忘我英语单词APP - 后端服务已启动')
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.json({ code: 0, msg: '请输入账号密码' })
  }
  res.json({
    code: 1,
    msg: '登录成功',
    token: 'user-token-' + username
  })
})

app.post('/api/register', (req, res) => {
  const { username, password } = req.body
  res.json({ code: 1, msg: '注册成功' })
})

app.get('/api/words', (req, res) => {
  const wordList = [
    { id: 1, word: 'forget', meaning: '忘记' },
    { id: 2, word: 'remember', meaning: '记得' },
    { id: 3, word: 'learn', meaning: '学习' },
    { id: 4, word: 'practice', meaning: '练习' },
    { id: 5, word: 'improve', meaning: '提高' }
  ]
  res.json(wordList)
})

app.post('/api/save-word', (req, res) => {
  const { token, wordId } = req.body
  res.json({ code: 1, msg: '单词已保存到勿忘我' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('服务运行在端口 ' + PORT)
})
