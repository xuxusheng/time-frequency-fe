FROM node:14-slim AS builder
WORKDIR /project
# 安装依赖
COPY package.json yarn.lock .npmrc /project/
#RUN npm ci
RUN yarn install
# 构建
COPY . /project/
#RUN npm run build
RUN yarn build

# ------------- 分割线 ------------- #

FROM nginx:alpine
MAINTAINER xusheng:20691718@qq.com
EXPOSE 80
# 替换镜像源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# 设置时区
RUN apk update --no-cache && apk add --no-cache ca-certificates tzdata
ENV TZ Asia/Shanghai
# 拷贝编译好的前端静态资源
COPY --from=builder /project/dist /usr/share/nginx/html
# 拷贝 nginx 配置模板文件
COPY ./_ci/nginx.conf /tmp/nginx.conf
# entrypoint、cmd 用法参考：https://www.jianshu.com/p/c4aa4eaa71fb
COPY ./_ci/entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

