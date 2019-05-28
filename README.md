# React Map Wrapper

The MapWrapper component provides some utilities to pass Geocoder API tools. As far as I know, there are some common values that need to use these tools something like latitude, longitude, zoom and etc. That is why I wrote this component without any third-party tools.

## usage

```jsx
render() {
	return (
		<MapWrapper>
			({ viewport, markerCords } => {
				const { lat, long } = markerCords;
				return (
					<Geocoder
						lat={viewport.latitude}
						long={viewport.longitude}
						onChangeGeocoder={view => changeViewPortFiled('latitude', view.lat)}
					>
						<MarkerGeocoder lat={lat} long={long} />
					</Geocoder>
				)}
			)
		</MapWrapper>
	);
}
```
