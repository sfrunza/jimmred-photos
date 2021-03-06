require 'carrierwave/orm/activerecord'

class Photo < ActiveRecord::Base
    mount_uploader :image, PhotoUploader
end
