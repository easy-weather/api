WEATHER.Views.Map = Backbone.View.extend
  initialize: (options) ->
    @el = $(@el)
    @template = _.template(WEATHER.Templates.Map)

  render: ->
    @el.html @template()

  postRender: ->
    mapOptions =
      zoom: 15
      center: new google.maps.LatLng(@model.geoLocation.coords.latitude, @model.geoLocation.coords.longitude)
      mapTypeId: google.maps.MapTypeId.SATELLITE
      draggable: false
      zoomControl: false
      scrollwheel: false
      panControl: false
      streetViewControl: false
      mapTypeControl: false

    map = new google.maps.Map(@el.find("#map")[0], mapOptions)
    google.maps.event.addListenerOnce map, "idle", ->
      $("#overlay").show()