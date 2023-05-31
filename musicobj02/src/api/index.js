import axios from "axios"

const baseUrl = "http://localhost:3000";

//封装获取轮播图的api 调用例子 : /banner,/banner?type=2 type=0,1,2,3
export function getBanner(type=0){
	return axios.get(`${baseUrl}/banner?type=${type}`);
}

//封装获取轮播图的api 调用例子 : /banner,/banner?limlt=30 limlt=10,50,100
export function getMusic(limlt=10){
	return axios.get(`${baseUrl}/personalized?limlt=${limlt}`);
}

//封装获取歌单详情的api 调用例子 : /playlist/detail?id=24381616
export function getMusicList(id){
	return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//封装获取歌词详情的api 调用例子 : http://localhost:3000/lyric?id=404459664 音乐id
export function getLyric(id){
	return axios.get(`${baseUrl}/lyric?id=${id}`);
}

//封装搜索歌曲的api 调用例子 : /search/keywords=海阔天空
export function searchMusic(keywords){
	return axios.get(`${baseUrl}/search?keywords=${keywords}`);
}

//对外抛出
export default {getBanner,getMusic,getLyric,searchMusic};