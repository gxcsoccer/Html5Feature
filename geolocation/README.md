
##getCurrentPosition()

```javascript
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(positionSuccess, positionError, {
        enableHighAccuracy: true, // 设成true可能会使得获取位置的速度变慢
        timeout: 10000, // 单位：毫秒
        maximumAge: Infinity // 单位：毫秒
    });
}

```

##Position数据

属性						类型				备注
coords.latitude			double			纬度(度)
coords.longitude		double			经度(度)
coords.accuracy			double			精度(米)
coords.altitude			double或null		海拔(米)
coords.altitudeAccuracy	double或null		海拔精度(米)
coords.heading			double或null		度(顺时针，以正北为基准)
coords.speed			double或null		米/秒
timestamp				DOMTimeStamp	可以转成Date对象


##错误处理

###PositionError对象
	- code
	- message

PERMISSION_DENIED(1): 用户不同意被获取位置信息。
POSITION_UNAVAILABLE(2): 网络不可用或者无法连接到获取位置信息的卫星。
TIMEOUT(3): 网络可用但是花了太长时间的计算用户的位置上。
UNKNOWN_ERROR(0): 发生其他未知错误。