# React Map Wrapper

The MapWrapper component provides some utilities to pass Geocoder API tools. As far as I know, there are some common values that need to use these tools something like latitude, longitude, zoom and etc. That is why I wrote this component without any third-party tools.

## usage

```jsx
render() {
  return (
    <MapWrapper>
      {({ viewport, markerCords }) => {
        const { lat, long } = markerCords;
        return (
          <Geocoder
            lat={viewport.latitude}
            long={viewport.longitude}
            onChangeGeocoder={view => changeViewPortFiled("latitude", view.lat)}
          >
            <MarkerGeocoder lat={lat} long={long} />
          </Geocoder>
        );
      }}
    </MapWrapper>
  );
}
```

## Map Wrapper provided utilities

| name                 | type                 | explain                                                                                                                                                    |
| -------------------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| viewport             | object               | this contains: width, height, latitude, longitude, zoom. default viewport its [here](https://github.com/rzkhosroshahi/react-map-wrapper/#Default-viewport) |
| markerCords          | object               | this contains marker coordinate lat, long. default for this is zero                                                                                                                                                       |
| changeViewPort       | void                 | update viewport state with pass all viewport new state.                                                                                                                                                       |
| changeViewPortFiled  | void                 | update just one field in viewport                                                                                                                                                      |
| isRenderMarker       | boolean              | this represents that markers should be rendering or not. default is *false*                                                                                                                                                        |
| changeIsRenderMarker | changeIsRenderMarker | update isRenderMarker state by pass boolean argument                                                                                                                                                     |

## Default viewport

```javascript
const defaultViewPort = {
  width: 800,
  height: 400,
  latitude: 35.72343054503254,
  longitude: 51.38949088069012,
  zoom: 12
};
```
