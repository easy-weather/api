WEATHER.Views.Loading =  Backbone.View.extend(
  initialize = ->
    @el = $(@el)
    @template = _.template(WEATHER.Templates.Loading)

  render = ->
    @el.html @template()

  postRender = ->
)