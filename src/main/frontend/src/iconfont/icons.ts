/* tslint:disable */
// Generated
export enum ICONS {
  EMPTY = ' ',
    <% _.each(glyphs, function(icon){ %>
  <%= icon.name.replace(/-/g,'_').toUpperCase() %> = 'icon-<%= icon.name %>',
  <% }) %>
}
