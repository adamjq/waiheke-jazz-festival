# Waiheke Jazz Festival website

This repo contains the code for the [Waiheke Jazz Festival public website](https://www.waihekejazzfestival.co.nz/).
The website it written using Typescript and React.

## Dependencies

- `yarn`
- `typescript`
- `Google Maps API Key`
- `MailChimp`

## Deployment

Development deploy to GitHub pages:
```
make gh-pages-deploy
```

Deploy to production AWS S3 bucket:
```
make prod-deploy
```

# Notes:

Make sure the build code is added to the S3 folder `waiheke-jazz-festival`