WEATHER.Views.Home = Backbone.View.extend(
  id: "home"

  initialize: ->
    @el = $(@el)
    @template = _.template(WEATHER.Templates.Conditions)

  render: ->
    console.log @model.models[0].toJSON()
    conditions = @model.models[0].toJSON()
    $(@el).html @template(conditions)

    @
)