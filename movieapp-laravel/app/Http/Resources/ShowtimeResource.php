<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowtimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'showtime'; 

    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'movie' => new MovieResource($this->resource->movie),
            'cinema' => $this->resource->cinema,
            'st_date' => $this->resource->st_date,
            'st_time' => $this->resource->st_time,
        ];
    }
}
