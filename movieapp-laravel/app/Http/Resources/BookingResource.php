<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'booking'; 

    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'showtime' => new ShowtimeResource($this->resource->showtime),
            'ticket_qty' => $this->resource->ticket_qty,
            'user' => new UserResource($this->resource->user)
        ];
    }
}
