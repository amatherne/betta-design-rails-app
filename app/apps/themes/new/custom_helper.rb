module Themes::New::CustomHelper

  def theme_custom_settings(theme)
    case params[:action_name]
      when "settings"
        render "themes/new/views/admin/settings"
      when "save_settings"
        theme.set_field_values(params[:field_options])
        flash[:notice] = "Settings saved!"
        redirect_to action: :settings, action_name: "settings"
    end
  end

  def theme_custom_on_install_theme(theme)
    unless theme.get_field_groups.where(slug: "theme_new_fields").any?
      group = theme.add_custom_field_group({name: "New theme settings", slug: "theme_new_fields", description: "new theme"})
      group.add_manual_field({"name"=>"Background color", "slug"=>"theme_custom_bg_color"},{field_key: "colorpicker", required: true})
      group.add_manual_field({"name"=>"Links color", "slug"=>"theme_custom_links_color"},{field_key: "colorpicker", required: true})
      group.add_manual_field({"name"=>"Footer text", "slug"=>"theme_custom_footer_text"},{field_key: "editor", translate: true})
    end

    unless theme.site.nav_menus.where(slug: "main_menu").any?
      theme.site.nav_menus.create(name: "Main Menu", slug: "main_menu")
    end
  end

  def theme_custom_on_uninstall_theme(theme)
    theme.get_field_groups().destroy_all
    theme.destroy
  end
    def new_extra_custom_fields(args)
      args[:fields][:my_slider] = {
          key: 'my_slider',
          label: 'My Slider',
          render: theme_view('custom_field/my_slider.html.erb'),
          options: {
              required: false,
              multiple: true,
          },
          extra_fields:[
              {
                  type: 'text_box',
                  key: 'dimension',
                  label: 'Dimensions',
                  description: 'Crop images with dimension (widthxheight), sample:<br>400x300 | 400x | x300 | ?400x?500 | ?1400x (? => maximum, empty => auto)'
              }
          ]
      }
    end
end
