# 程序设计

## 接口设计
### 1. 根据模板获取简单JSon

### 2. 实例化协议

### 3. 签署协议

### 4. 获取已签署的协议

## 数据库设计

### 协议模板表

| 字段名称  | 字段说明                       |
| --------- | ------------------------------ |
| id        |                                |
| appkey    |                                |
| channel   |                                |
| accountId |                                |
| state     | 0 未审核， 1 已审核， 2 未通过 |
| name      | 协议名称                       |
| type      | 类型：1：协议，2：Credential   |
| content   | 主体模板                       |
| version   |                                |

### 协议模板解析表

| 字段名称     | 字段说明     |
| ------------ | ------------ |
| id           | 模板 id      |
| property     | 属性         |
| analysisPath | 属性解析路径 |

### 协议实例表

| 字段名称        | 字段说明                     |
| --------------- | ---------------------------- |
| id              |                              |
| appkey          |                              |
| channel         |                              |
| subjectType     | 实例化主体类型               |
| subjectId       | 实例化主体 ID                |
| name            | 协议名称                     |
| type            | 类型：1：协议，2：Credential |
| subject         |                              |
| controller      |                              |
| contentData     | 内容                         |
| subjectProof    |                              |
| controllerProof |                              |
| tx              |                              |
| createAt        |                              |
