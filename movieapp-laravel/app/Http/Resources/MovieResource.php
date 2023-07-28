<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    
    public static $wrap = 'movie'; 

    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'slug' => $this->resource->slug,
            'release_year' => $this->resource->release_year,
            'description' => $this->resource->description,
            'cast' => $this->resource->cast,
            'image' => $this->resource->image,
            'genre' => new GenreResource($this->resource->genre),
            'director' => new DirectorResource($this->resource->director),
            'user' => new UserResource($this->resource->user)
        ];
    }
}
