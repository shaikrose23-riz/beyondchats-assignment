<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::latest()->get();
    }
    public function show($id)
    {
        return Article::findOrFail($id);
    }
    public function store(Request $request)
    {
       // $request->validate([
         //   'title' => 'required',
          //  'content' => 'required'
        //]);

        $article = Article::create([
        'title' => $request->title,
        'slug' => Str::slug($request->title) . '-' . time(),
        'content' => $request->content,
        'source_url' => $request->source_url,
        'version' => $request->version ?? 'original'
    ]);

    return response()->json($article, 201);
}

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->update($request->all());

        return response()->json($article);
    }
    public function destroy($id)
    {
        Article::destroy($id);

        return response()->json(['message' => 'deleted successfully']);
    }
}
