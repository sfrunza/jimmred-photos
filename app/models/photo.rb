require 'carrierwave/orm/activerecord'

class Photo < ActiveRecord::Base
    mount_uploader :image, PhotoUploader
    mount_uploader :link, PhotoUploader
end
