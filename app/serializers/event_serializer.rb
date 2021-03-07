require 'carrierwave/orm/activerecord'

class EventSerializer < ActiveModel::Serializer
  attributes :id, :date, :service, :name, :email, :subject, :message, :time
end
