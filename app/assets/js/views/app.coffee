WEATHER.Views.App = Backbone.View.extend
  initialize: (options) ->
    @el = $(@el)
    @template = _.template(WEATHER.Templates.App)
    @appDelegate = options.appDelegate  if options.appDelegate

    if options.model
      @model = options.model

      @model.on "geoLocationFound", =>
        @positionAcquired()

  positionAcquired: ->
    @mapView = new WEATHER.Views.Map(
      model: @model
      appDelegate: this
    )
    
    @mapView.render()
    $("body").append @mapView.el
    @mapView.postRender()

  render: ->
    @el.html @template()

    if @model.activeView
      @model.activeView.appDelegate = this
      @model.activeView.render()
      @el.find("#content").html @model.activeView.el

  renderSecondView: ->
    if @model.secondView
      @model.secondView.appDelegate = this
      @model.secondView.render()
      @el.find("#content").append @model.secondView.el

  postRender: ->