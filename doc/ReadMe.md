


### 폰트 설치하기 


apple font
san francisco font라는게 나옵니다

### Open-Arrow

openArrow적용중에 이슈 하라는 데로 head에 style tag를 달고 했는데 안 된다. 

맞음 

그냥 html에서는 잘 됨 ㅜ

React Component위주여서 style이 적용 안 될 수가 있나 component안에 global하게 넣어보도록 수정해보자 

```js
const formatArea = (val) => {
  return (<FilterButtonEl>{val} &udarr;</FilterButtonEl>);
}
function을 return하는 형식으로 쓰면 entityCode를 쓸 수 있다고 한다. 

```

OpenArrow쓰지 않기로 결정 ... 시간 소모 너무 많이 했다 ㅜㅜ

3시-11시 8시간 
3-4 수다 
4-11

### ETC 

제플린 페이지 별로 asset을 다운 받을 수 있다. 


### 체크리스트 

hover 됬을 때 텍스트 길이 만큼 아래 border hihghlight된다. 
지금은 텍스트 길이에 맞추질 못하고 있음 