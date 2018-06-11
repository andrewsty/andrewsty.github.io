## 准备目录
1. 在github上fork项目到自己的repo
2. 在自己的github上clone改项目到本地
```cmd
git clone https://github.com/你的名字/gzlsd_addons.git
```
3. 进入gzlsd_addons目录，增加远程分支`https://github.com/andrewsty/gzlsd_addons.git`到你本地。
```cmd
git remote add gzlsd_addons https://github.com/andrewsty/gzlsd_addons.git
```
环境就准备好了

## 更新远程分支

1. 拉取远程代码
```cmd
git fetch gzlsd_addons
```
2. 合并对方代码
```cmd
git merge gzlsd_addons/master
```
## 推送本地修改
1. 添加要提交的目录
```cmd
git add . 
```
2. 提交更新
```cmd
git commit -m "本次修改的描述" 
```
3. 推送到github
```cmd
git push 
```
4. 在github网页上点击pull request按钮
5. 如果有pull request 没有被接受，之后新的push自动会合并到pullrequest
