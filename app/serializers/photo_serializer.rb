require 'carrierwave/orm/activerecord'

class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :likes, :liked, :image
end
