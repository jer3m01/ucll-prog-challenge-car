const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


const inputPath = path.join('.', 'src');
const outputPath = process.env['OUTPUT'];


if ( !outputPath )
{
    throw new Error('No output path defined! Set environment variable OUTPUT');
}

function removePrefix(string, prefix)
{
    const regexString = `^${prefix}(.*)$`;
    const regex = new RegExp(regexString);
    const matchResult = string.match(regex);

    if ( !matchResult )
    {
        throw new Error(`Bug in webpack config file! ${string} does not match regex /${regexString}/`);
    }
    else
    {
        return matchResult[1];
    }
}

function chapter(options)
{
    const files = [
        path.resolve('.', inputPath, 'tests.tsx'),
        path.resolve('.', inputPath, 'tests.html'),
        path.resolve('.', inputPath, 'student.js'),
    ];

    return {
        entry: files,
        output: {
            path: path.resolve(__dirname, outputPath),
            filename: 'bundle.js'
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: 'tests.html' }
                        },
                        {
                            loader: 'string-replace-loader',
                            options: {
                                search: 'VERSION',
                                replace: JSON.stringify(require("./package.json").version),
                            }
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    use: [ 'ts-loader' ],
                    exclude: /node_modules/,
                },
                {
                    test: /public-/,
                    use: {
                        loader: 'file-loader',
                        options: { name: (filename) => removePrefix(path.basename(filename), 'public-' ) }
                    }
                },
                {
                    test: /student\.js$/,
                    use: {
                        loader: 'file-loader',
                        options: { name: 'student.js' }
                    }
                },
                {
                    test: /\.png$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                },
                {
                    test: /\.txt$/,
                    use: [
                        {
                            loader: 'raw-loader',
                            options: {
                                esModule: false
                            }
                        }
                    ]
                }
             ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.css'],
            plugins: [
                new TsconfigPathsPlugin({})
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                verifySolutions: JSON.stringify(options.verifySolutions),
                extraTests: JSON.stringify(options.extraTests),
                language: JSON.stringify(options.language),
                VERSION: JSON.stringify(require("./package.json").version),
            }),
        ],
    };
}


module.exports = function(env, argv)
{
    const verifySolutions = !('NOVERIFY' in process.env);
    const extraTests = ('EXTRATESTS' in process.env);

    if ( !('LANGUAGE' in process.env) )
    {
        throw new Error('No language defined');
    }

    const language = process.env['LANGUAGE'];

    return chapter({verifySolutions, extraTests, language});
}
