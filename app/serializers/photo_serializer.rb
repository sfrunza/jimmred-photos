require 'carrierwave/orm/activerecord'

class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :filename, :dimensions, :likes, :liked, :image, :link
end
